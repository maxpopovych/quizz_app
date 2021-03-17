using System;
using System.Collections.Generic;
using NUnit.Framework;
using QuizzApp.Models;
using QuizzApp.Controllers;

namespace QuizzApp.Test
{
    public class QuestionsControllerTest
    {
        [Test]
        public void Post()
        {
            using (var controller = new QuestionsController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var question = new Models.Question()
                {
                    Id = 100,
                    TestId = 100,
                    Text = "some text"
                };
                try
                {
                    controller.Delete(100);
                    controller.Post(question);
                }
                catch (System.ArgumentException)
                {
                    controller.Post(question);
                }
                Assert.AreEqual(controller.Get(100), question);
            }
        }

        [Test]
        public void GetByIdIfExist()
        {
            using (var controller = new QuestionsController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var question = new Models.Question()
                {
                    Id = 100,
                    TestId = 100,
                    Text = "some text"
                };
                try
                {
                    controller.Post(question);
                }
                catch (System.ArgumentException)
                {
                }
                Assert.AreEqual(controller.Get(100), question);
            }
        }

        [Test]
        public void GetByIdIfNotExist()
        {
            using (var controller = new QuestionsController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                Assert.IsNull(controller.Get(10000));
            }
        }

        [Test]
        public void Put()
        {
            using (var controller = new QuestionsController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var question = new Models.Question()
                {
                    Id = 100,
                    TestId = 100,
                    Text = "some text"
                };
                try
                {
                    controller.Delete(100);
                    controller.Post(question);
                }
                catch (System.ArgumentException)
                {
                    controller.Post(question);
                }
                question.Text = "upd";
                controller.Put(question);
                Assert.AreEqual(controller.Get(100), question);
            }
        }

        [Test]
        public void Delete()
        {
            using (var controller = new QuestionsController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var question = new Models.Question()
                {
                    Id = 100,
                    TestId = 100,
                    Text = "some text"
                };
                try
                {
                    controller.Post(question);
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
        public void GetByTestId_Wrong_Id()
        {
            using (var controller = new QuestionsController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                try
                {
                    controller.Delete(1000);
                }
                catch (System.ArgumentException)
                {
                }
                Assert.AreEqual(controller.GetFromTest(1000), new List<Models.Question>());
            }
        }

        [Test]
        public void GetByTestId()
        {
            using (var controller = new QuestionsController(new ApplicationContext(
                TestDBBootstrapper.GetInMemoryDbContextOptions())))
            {
                var question = new Models.Question()
                {
                    Id = 100,
                    TestId = 100,
                    Text = "some text"
                };
                try
                {
                    controller.Post(question);
                }
                catch (System.ArgumentException)
                {
                }
                Assert.AreEqual(controller.GetFromTest(100), new List<Models.Question>() { question });
            }
        }
    }
}
