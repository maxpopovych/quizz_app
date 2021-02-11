using System.Collections.Generic;

namespace QuizzApp.Models
{
    /// <summary>
    /// This class helps to get answers from the interviewee
    /// </summary>
    public class SetResultRequest
    {
        /// <summary>
        /// Test id
        /// </summary>
        public int TestId { get; set; }

        /// <summary>
        /// Name of interviewee
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Dictionary with answers
        /// Key: id of question(string)
        /// Value: id of answer(integer)
        /// </summary>
        public Dictionary<string, int> Answres { get; set; }
    }
}
