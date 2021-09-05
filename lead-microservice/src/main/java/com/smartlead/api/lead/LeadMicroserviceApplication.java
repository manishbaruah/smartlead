package com.smartlead.api.lead;

import com.smartlead.api.lead.repository.LeadRepository;
import com.smartlead.common.entity.*;
import com.smartlead.common.vo.LeadTaskVO;
import com.smartlead.common.vo.LeadVO;
import org.dozer.DozerBeanMapper;
import org.dozer.Mapper;
import org.dozer.loader.api.BeanMappingBuilder;
import org.dozer.loader.api.TypeMappingOptions;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableScheduling;

import java.util.Date;

@EnableEurekaClient
@SpringBootApplication
@EntityScan("com.smartlead.*")
@EnableJpaRepositories("com.smartlead.*")
@ComponentScan(basePackages = {"com.smartlead.*"})
@EnableScheduling
public class LeadMicroserviceApplication {

    public static void main(String[] args) {
        SpringApplication.run(LeadMicroserviceApplication.class, args);
    }

    @Bean
    public Mapper mapper() {
        BeanMappingBuilder beanMappingBuilder = new BeanMappingBuilder() {
            @Override
            protected void configure() {
                String dateFormat = "yyyy-MM-dd HH:mm:ss";
                mapping(Lead.class, LeadVO.class, TypeMappingOptions.wildcard(true), TypeMappingOptions.dateFormat(dateFormat))
                        .fields("createdOn", "createdOn")
                        .fields("modifiedOn", "modifiedOn");
                mapping(LeadTask.class, LeadTaskVO.class, TypeMappingOptions.wildcard(true), TypeMappingOptions.dateFormat(dateFormat))
                        .fields("scheduleFrom", "scheduleFrom")
                        .fields("scheduleTo", "scheduleTo");
            }
        };
        DozerBeanMapper dozerBeanMapper = new DozerBeanMapper();
        dozerBeanMapper.addMapping(beanMappingBuilder);
        return dozerBeanMapper;
    }

    @Bean
    public CommandLineRunner createTestLeads(LeadRepository leadRepository) {
        return args -> {
            if (leadRepository.count() == 0) {
                for (int i=1; i<=20; i++) {
                    Lead l = new Lead();
                    l.setFirstName("Test Lead");
                    l.setLastName(i+"");
                    l.setEmail("test@test.com");
                    l.setPhone("+919898989898");
                    l.setWebsite("http://www.test.com");
                    LeadSource ls=new LeadSource();
                    ls.setSourceId(1);
                    l.setLeadSource(ls);
                    LeadStage lst = new LeadStage();
                    lst.setStageId(1);
                    l.setLeadStage(lst);
                    l.setNotes("test note");
                    l.setCreatedOn(new Date());
                    l.setCreatedBy("user1");
                    l.setModifiedOn(new Date());
                    l.setModifiedBy("user1");
                    User u=new User();
                    u.setUserId(5); // set a valid user_id from the tbl_user table
                    l.setOwner(u);
                    leadRepository.save(l);
                }
            }
        };
    }
}
