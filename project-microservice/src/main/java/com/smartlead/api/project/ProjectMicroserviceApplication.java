package com.smartlead.api.project;

import com.smartlead.api.project.repository.ProjectRepository;
import com.smartlead.common.entity.Project;
import com.smartlead.common.vo.ProjectVO;
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

import java.util.Date;

@EnableEurekaClient
@SpringBootApplication
@EntityScan("com.smartlead.*")
@EnableJpaRepositories("com.smartlead.*")
@ComponentScan(basePackages = {"com.smartlead.*"})
public class ProjectMicroserviceApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProjectMicroserviceApplication.class, args);
    }

    @Bean
    public Mapper mapper() {
        BeanMappingBuilder beanMappingBuilder = new BeanMappingBuilder() {
            @Override
            protected void configure() {
                String dateFormat = "yyyy-MM-dd HH:mm:ss";
                mapping(Project.class,
                        ProjectVO.class,
                        TypeMappingOptions.wildcard(true),
                        TypeMappingOptions.dateFormat(dateFormat)).
                        fields("createdOn", "createdOn").
                        fields("modifiedOn", "modifiedOn");
            }
        };
        DozerBeanMapper dozerBeanMapper = new DozerBeanMapper();
        dozerBeanMapper.addMapping(beanMappingBuilder);
        return dozerBeanMapper;
    }
}
