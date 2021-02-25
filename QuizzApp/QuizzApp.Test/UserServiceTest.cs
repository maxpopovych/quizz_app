using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.Options;
using QuizzApp.Helpers;
using QuizzApp.Models;
using QuizzApp.Services;
using System.Linq;


namespace QuizzApp.Test
{
    public class UserServiceTest : IUserService
    {

        private List<User> Users;

        public UserServiceTest()
        {
            Users = new List<User>()
            {
                new User()
                {
                    Username = "test",
                    Password = "test"
                }
            };
        }

        public AuthenticateResponse Authenticate(AuthenticateRequest model)
        {
            User user = Users.SingleOrDefault(x=> x.Username == model.Username && x.Password == model.Password);

            if (user == null)
            {
                return null;
            }
            string token = generateJwtToken(user);
            return new AuthenticateResponse(user, token);
        }

        public IEnumerable<User> GetAll()
        {
            return Users;
        }

        public User GetById(int id)
        {
            return Users.First(x=> x.Id == id);
        }

        private string generateJwtToken(User user)
        {
            return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYmYiOjE2MTQyNDYwNjksImV4cCI6MTYxNDg1MDg2OSwiaWF0IjoxNjE0MjQ2MDY5fQ.l3H8-m0bYXpOW-iHTdKZZw3U_iZ7pPRNDrvdV2MB57k";
        }
    }
}
