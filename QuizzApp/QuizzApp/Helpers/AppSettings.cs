namespace QuizzApp.Helpers
{
    /// <summary>
    /// This class contains secret key for JWT authentication.
    /// </summary>
    public class AppSettings
    {
        /// <summary>
        /// Secret JWT key.
        /// </summary>
        public string Secret { get; set; }
    }
}