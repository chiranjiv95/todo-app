package com.todo.rest.webservices.helloworld;

import com.todo.rest.webservices.helloworld.HelloWorldBean;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class HelloWorldController {

    @RequestMapping(method = RequestMethod.GET, path="/jpa/hello-world/pv/{name}")
    public HelloWorldBean helloWorldBeanpv(@PathVariable String name){
        return new HelloWorldBean(String.format("Hello World, %s", name));
    }
}
