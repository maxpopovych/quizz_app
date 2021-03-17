using System;
using System.Collections.Generic;
using NUnit.Framework;
using QuizzApp.Models;
using QuizzApp.Controllers;


namespace QuizzApp.Test
{
    public class AnswersControllerTest
    {
        [Test]
        public void Post()
        {
            using (var controller = new AnswersController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var answer = new Models.Answer()
                {
                    Id = 100,
                    isTrue = false,
                    QuestionId = 100,
                    Test = ""
                };
                try
                {
                    controller.Delete(100);
                    controller.Post(answer);
                }
                catch (System.ArgumentException)
                {
                    controller.Post(answer);
                }
                Assert.AreEqual(controller.Get(100), answer);
            }
        }

        [Test]
        public void GetByIdIfExist()
        {
            using (var controller = new AnswersController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var answer = new Models.Answer()
                {
                    Id = 100,
                    isTrue = false,
                    QuestionId = 100,
                    Test = ""
                };
                try
                {
                    controller.Post(answer);
                }
                catch (System.ArgumentException)
                {
                }
                Assert.AreEqual(controller.Get(100), answer);
            }
        }

        [Test]
        public void GetByIdIfNotExist()
        {
            using (var controller = new AnswersController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                Assert.IsNull(controller.Get(10000));
            }
        }

        [Test]
        public void Put()
        {
            using (var controller = new AnswersController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var answer = new Models.Answer()
                {
                    Id = 100,
                    isTrue = false,
                    QuestionId = 100,
                    Test = ""
                };
                try
                {
                    controller.Delete(100);
                    controller.Post(answer);
                }
                catch (System.ArgumentException)
                {
                    controller.Post(answer);
                }
                answer.Test = "upd";
                controller.Put(answer);
                Assert.AreEqual(controller.Get(100), answer);
            }
        }

        [Test]
        public void Delete()
        {
            using (var controller = new AnswersController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var answer = new Models.Answer()
                {
                    Id = 100,
                    isTrue = false,
                    QuestionId = 100,
                    Test = ""
                };
                try
                {
                    controller.Post(answer);
                    controller.Delete(100);
                }
                catch (System.ArgumentException)
                {
                    controller.Delete(100);
                }
                Assert.IsNull(controller.Get(100));
            }
        }


        [Test]
        public void GetByQuestionId()
        {
            using (var controller = new AnswersController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var answer = new Models.Answer()
                {
                    Id = 100,
                    isTrue = false,
                    QuestionId = 100,
                    Test = ""
                };
                try
                {
                    controller.Post(answer);
                }
                catch (System.ArgumentException)
                {
                }
                Assert.AreEqual(controller.GetFromQuestion(100), new List<Models.Answer>() { answer });
            }
        }

        [Test]
        public void SetTrue()
        {
            using (var controller = new AnswersController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var answer = new Models.Answer()
                {
                    Id = 100,
                    isTrue = false,
                    QuestionId = 100,
                    Test = ""
                };
                try
                {
                    controller.Post(answer);
                }
                catch (System.ArgumentException)
                {
                }

                controller.SetTrue(100);
                Assert.AreEqual(controller.Get(100).isTrue, true);
            }
        }
    }
}
