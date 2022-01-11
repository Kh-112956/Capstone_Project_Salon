package com.example.Salon.Model.Config;
import com.example.Salon.Model.Entities.Services;
import com.example.Salon.Model.Repository.ServicesRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.util.List;
@Configuration
public class ServicesConfig {

    @Bean
    CommandLineRunner commandLineRunner2 (ServicesRepository repository){
        return args -> {

            Services rrr=new Services(
                    1,
                    "تصفيف شعر",
                    15.5,
                    "matierals",
                    "https://www.sfax.com.tn/wp-content/uploads/2018/07/%D8%AA%D8%B5%D9%81%D9%8A%D9%81_%D8%A7%D9%84%D8%B4%D8%B9%D8%B1_%D8%A7%D9%84%D8%B7%D9%88%D9%8A%D9%84.jpg"

            );


            repository.save(rrr);

            Services aaa=new Services(
                    2,
                    "تقليم أظافر",
                    30,
                    "matierals",
                    "https://www.sayidaty.net/sites/default/files/styles/1375_scale/public/2019/02/01/4886686-1782440555.jpg?itok=Oxe-Jxt7"

            );


            repository.save(aaa);

            Services bbb=new Services(
                    3,
                    "طلاء أظافر",
                    30,
                    "matierals",
                    "https://modo3.com/thumbs/fit630x300/18176/1631534035/%D8%AD%D9%83%D9%85_%D8%B7%D9%84%D8%A7%D8%A1_%D8%A7%D9%84%D8%A3%D8%B8%D8%A7%D9%81%D8%B1.jpg"
            );


            repository.save(bbb);

        };
    }
}
