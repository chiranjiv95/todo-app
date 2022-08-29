package com.todo.rest.webservices.basic.auth;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class BasicAuthController {

    @RequestMapping(method = RequestMethod.GET, path="/jpa/basicAuth")
    public AuthenticationBean helloWorldBean(){
        return new AuthenticationBean("You are Authenticated!");
    }

}
