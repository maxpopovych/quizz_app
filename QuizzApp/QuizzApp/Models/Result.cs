namespace QuizzApp.Models
{
    /// <summary>
    /// Result model
    /// </summary>
    public class Result
    {
        /// <summary>
        /// Id
        /// </summary>
        public int Id { get; set; }
#nullable enable
        /// <summary>
        /// Interviewee name
        /// </summary>
        public string? intervieweeName { get; set; }
#nullable disable
        /// <summary>
        /// Id of related test
        /// </summary>
        public int TestId { get; set; }
        /// <summary>
        /// Count of right answers
        /// </summary>
        public int score { get; set; }
    }
}
