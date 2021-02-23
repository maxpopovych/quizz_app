using System;
using System.Collections.Generic;
using NUnit.Framework;
using QuizzApp.Models;
using QuizzApp.Controllers;
using System.Linq;


namespace QuizzApp.Test
{
    public class ResultControllerTest
    {
        [Test]
        public void Get()
        {
            FillDB();

            using (var controller = new ResultController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var req = new SetResultRequest()
                {
                    TestId = "1",
                    Name = "name",
                    Answers = new Dictionary<string, string>()
                    {
                        { "some text1", "test1" },
                        { "some text2" , "test3" }
                    }
                };
                try
                {
                    controller.Post(req);
                }
                catch (System.ArgumentException)
                {
                }
                var expected = new Result()
                {
                    Id = 1,
                    IntervieweeName = "name",
                    TestId = 1,
                    Score = 2
                };
                var ret = controller.Get().ToList<Result>().First();
                Assert.AreEqual(expected, ret);
            }
        }

        [Test]
        public void GetById()
        {
            FillDB();

            using (var controller = new ResultController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var req = new SetResultRequest()
                {
                    TestId = "1",
                    Name = "name",
                    Answers = new Dictionary<string, string>()
                    {
                        { "some text1", "test1" },
                        { "some text2" , "test3" }
                    }
                };
                try
                {
                    controller.Post(req);
                }
                catch (System.ArgumentException)
                {
                }
                var expected = new Result()
                {
                    Id = 1,
                    IntervieweeName = "name",
                    TestId = 1,
                    Score = 2
                };
                var ret = controller.Get(1).ToList<Result>().First();
                Assert.AreEqual(expected, ret);
            }
        }

        [Test]
        public void GetUserChoiseByResultId()
        {
            FillDB();

            using (var controller = new ResultController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var req = new SetResultRequest()
                {
                    TestId = "1",
                    Name = "name",
                    Answers = new Dictionary<string, string>()
                    {
                        { "some text1", "test1" },
                        { "some text2" , "test3" }
                    }
                };
                try
                {
                    controller.Post(req);
                }
                catch (System.ArgumentException)
                {
                }
                var expected = new List<UserChoice>()
                {
                    new UserChoice()
                    {
                        Id = 1,
                        ResultId = 1,
                        AnswerId = 1,
                        QuestionId = 1
                    },
                    new UserChoice()
                    {
                        Id = 2,
                        ResultId = 1,
                        AnswerId = 3,
                        QuestionId = 2
                    }
                };
                var ret = controller.GetUserChoiseByResultId(1).ToList<UserChoice>();
                Assert.AreEqual(expected, ret);
            }
        }

        [Test]
        public void Post()
        {
            FillDB();

            using (var controller = new ResultController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var req = new SetResultRequest()
                {
                    TestId = "2",
                    Name = "name",
                    Answers = new Dictionary<string,string>()
                    {
                        { "some text1", "test1" },
                        { "some text2" , "test3" }
                    }
                };
                var response = (Microsoft.AspNetCore.Mvc.OkObjectResult)controller.Post(req);
                Assert.AreEqual(200,response.StatusCode);
            }
        }
        
        private void FillDB()
        {
            using (var controller = new TestController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var test = new Models.Test()
                {
                    Id = 1,
                    Name = "some name",
                    IntervieweeName = "inter name",
                    NumberOfRuns = 6,
                    StartDate = DateTime.Now,
                    EndDate = DateTime.Now
                };
                try
                {
                    controller.Post(test);
                }
                catch (System.ArgumentException)
                {
                }
            }

            using (var controller = new QuestionsController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var question1 = new Models.Question()
                {
                    Id = 1,
                    TestId = 1,
                    Text = "some text1"
                };
                var question2 = new Models.Question()
                {
                    Id = 2,
                    TestId = 1,
                    Text = "some text2"
                };
                try
                {
                    controller.Post(question1);
                }
                catch (System.ArgumentException)
                {
                }
                try
                {
                    controller.Post(question2);
                }
                catch (System.ArgumentException)
                {
                }
            }

            using (var controller = new AnswersController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var answers = new List<Models.Answer>()
                {
                    new Models.Answer()
                    {
                        Id = 1,
                        isTrue = true,
                        QuestionId = 1,
                        Test = "test1"
                    },
                    new Models.Answer()
                    {
                        Id = 2,
                        isTrue = false,
                        QuestionId = 1,
                        Test = "test2"
                    },
                    new Models.Answer()
                    {
                        Id = 3,
                        isTrue = true,
                        QuestionId = 2,
                        Test = "test3"
                    },
                    new Models.Answer()
                    {
                        Id = 4,
                        isTrue = false,
                        QuestionId = 2,
                        Test = "test4"
                    }
                };
                foreach(var answer in answers)
                {
                    try
                    {
                        controller.Post(answer);
                    }
                    catch (System.ArgumentException)
                    {
                    }
                }
            }

        }
    }

}
