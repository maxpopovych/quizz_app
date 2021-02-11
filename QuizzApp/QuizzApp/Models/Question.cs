namespace QuizzApp.Models
{
    /// <summary>
    /// Question model
    /// </summary>
    public class Question
    {
        /// <summary>
        /// Id
        /// </summary>
        public int Id { get; set; }
        /// <summary>
        /// Question text
        /// </summary>
        public string question { get; set; }
        /// <summary>
        /// Id of related test
        /// </summary>
        public int TestId { get; set; }

    }
}
