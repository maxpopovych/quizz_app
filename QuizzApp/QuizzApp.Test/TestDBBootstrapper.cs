using Microsoft.EntityFrameworkCore;
using NUnit.Framework;
using QuizzApp.Models;

namespace QuizzApp.Test
{
    public class TestDBBootstrapper
    {
        public static DbContextOptions<ApplicationContext> GetInMemoryDbContextOptions(string dbName = "QuizzApp")
        {
            var options = new DbContextOptionsBuilder<ApplicationContext>()
                .UseInMemoryDatabase(databaseName: dbName)
                .Options;

            return options;
        }
    }
}