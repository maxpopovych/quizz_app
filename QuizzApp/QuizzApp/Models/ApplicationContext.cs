using Microsoft.EntityFrameworkCore;

namespace QuizzApp.Models
{
    /// <summary>
    /// This class provides connection with DB
    /// </summary>
    public class ApplicationContext : DbContext
    {
        /// <summary>
        /// Class constructor
        /// </summary>
        /// <param name="options"></param>
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }

        /// <summary>
        /// Tests table
        /// </summary>
        public DbSet<Test> Tests { get; set; }

        /// <summary>
        /// Questions table
        /// </summary>
        public DbSet<Question> Questions { get; set; }

        /// <summary>
        /// Answers table
        /// </summary>
        public DbSet<Answer> Answers { get; set; }

        /// <summary>
        /// Results table
        /// </summary>
        public DbSet<Result> Results { get; set; }

        /// <summary>
        /// Users table
        /// </summary>
        public DbSet<User> Users { get; set; }

        /// <summary>
        /// User choices table
        /// </summary>
        public DbSet<UserChoice> UserChoices { get; set; }
    }
}
