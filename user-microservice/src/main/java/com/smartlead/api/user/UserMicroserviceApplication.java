package com.smartlead.api.user;

import com.smartlead.api.user.repository.OrganizationRepository;
import com.smartlead.api.user.repository.RoleRepository;
import com.smartlead.api.user.repository.UserRepository;
import com.smartlead.common.entity.Organization;
import com.smartlead.common.entity.Role;
import com.smartlead.common.entity.User;
import org.dozer.DozerBeanMapper;
import org.dozer.Mapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@EnableEurekaServer
@EnableZuulProxy
@SpringBootApplication
@EntityScan("com.smartlead.*")
@EnableJpaRepositories("com.smartlead.*")
@ComponentScan(basePackages = {"com.smartlead.*"})
public class UserMicroserviceApplication {

    private static final Logger log = LoggerFactory.getLogger(UserMicroserviceApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(UserMicroserviceApplication.class, args);
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public Mapper mapper() {
        return new DozerBeanMapper();
    }

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("*");
        config.addAllowedHeader("*");
        config.addAllowedMethod("OPTIONS");
        config.addAllowedMethod("GET");
        config.addAllowedMethod("POST");
        config.addAllowedMethod("PUT");
        config.addAllowedMethod("DELETE");
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }

    @Bean
    public CommandLineRunner createTestUsers(UserRepository userRepository,
                                                 OrganizationRepository organizationRepository,
                                                 RoleRepository roleRepository) {
        return args -> {
            if (userRepository.count() == 0) {
                List<Organization> organizations = organizationRepository.findAll();
                Role role = roleRepository.findByRoleName("Employee");
                Set<Role> roles = new HashSet();
                roles.add(role);
                for (int i = 1; i <= 3; i++) {
                    User user = new User();
                    user.setFirstName("Test");
                    user.setLastName("User");
                    user.setUsername("user" + i);
                    user.setMobile("+919898989898");
                    user.setEmail(user.getUsername() + "@user.com");
                    user.setOrganization(organizations.get(0));
                    user.setRoles(roles);
                    user.setPassword(new BCryptPasswordEncoder().encode("changeme"));
                    userRepository.save(user);
                }
            }
        };
    }
}
