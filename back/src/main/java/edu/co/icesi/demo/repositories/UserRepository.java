package edu.co.icesi.demo.repositories;


import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import edu.co.icesi.demo.models.UserModel;

@Repository
public interface UserRepository  extends CrudRepository<UserModel, Long> {

    @Query("SELECT u FROM UserModel u WHERE u.user = ?1 and u.password = ?2")
    UserModel loginUserModel(String user, String password);
}
    

