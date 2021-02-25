using System;
using System.Collections.Generic;
using NUnit.Framework;
using QuizzApp.Models;
using QuizzApp.Controllers;
using System.Linq;

namespace QuizzApp.Test
{
    public class UsersControllerTest
    {
        [Test]
        public void GetAll()
        {
            using (var controller = new UsersController(new UserServiceTest(), new ApplicationContext(
               TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var Users = new List<User>()
                {
                    new User()
                    {
                        Username = "test",
                        Password = "test"
                    }
                };
                var response = (Microsoft.AspNetCore.Mvc.OkObjectResult)controller.GetAll();
                Assert.AreEqual(Users,response.Value);
            }
        }

        [Test]
        public void AuthenticateOkResponse()
        {
            using (var controller = new UsersController(new UserServiceTest(), new ApplicationContext(
               TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var request = new AuthenticateRequest()
                {
                    Username = "test",
                    Password = "test"
                };
                var response = (Microsoft.AspNetCore.Mvc.OkObjectResult)controller.Authenticate(request);
                Assert.AreEqual(200, response.StatusCode);
            }
        }

        [Test]
        public void AuthenticateBadResponse()
        {
            using (var controller = new UsersController(new UserServiceTest(), new ApplicationContext(
               TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var request = new AuthenticateRequest()
                {
                    Username = "error",
                    Password = "error"
                };
                var response = (Microsoft.AspNetCore.Mvc.BadRequestObjectResult)controller.Authenticate(request);
                Assert.AreEqual(400, response.StatusCode);
            }
        }
    }
}
