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
        public string? IntervieweeName { get; set; }
#nullable disable

        /// <summary>
        /// Id of related test
        /// </summary>
        public int TestId { get; set; }

        /// <summary>
        /// Count of right answers
        /// </summary>
        public int Score { get; set; }

        /// <summary>
        /// Is objects are equals
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>
        public override bool Equals(object obj)
        {
            return obj is Result result &&
                   Id == result.Id &&
                   IntervieweeName == result.IntervieweeName &&
                   TestId == result.TestId &&
                   Score == result.Score;
        }
    }
}
