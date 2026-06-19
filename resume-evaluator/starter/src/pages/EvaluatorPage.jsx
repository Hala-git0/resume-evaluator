import { useEvaluator } from '../hooks/useEvaluator';

function EvaluatorPage() {
  const {
    jobDescription,
    setJobDescription,
    prompt,
    setPrompt,
    file,
    setFile,
    status,
    errorMessage,
    result,
    handleSubmit
  } = useEvaluator();

  return (
    <div className="evaluator-container">
      <div className="evaluator-wrapper">
        
        <h2 className="evaluator-title">
          Resume Evaluator - Your AI-Powered Career Assistant
        </h2>
        
        {/* التوزيع الرئيسي المكون من عمودين متجاورين */}
        <div className="evaluator-main-layout">
          
          {/* العمود الأول: الـ FORM (الجهة اليسرى في المخطط الشاشي) */}
          <div className="evaluator-form-column">
            <form onSubmit={handleSubmit}>
              
              {/* حقل الوصف الوظيفي */}
              <div className="form-group">
                <label className="form-label">Job Description:</label>
                <textarea
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder="Enter the job description here..."
                  rows="6"
                  className="form-textarea"
                />
              </div>

              {/* حقل التوجيهات الإضافية */}
              <div className="form-group">
                <label className="form-label">Custom Prompt (Optional):</label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Example: Please focus on the candidate's leadership skills and project management experience."
                  rows="4"
                  className="form-textarea"
                />
              </div>

              {/* حقل رفع الملف */}
              <div className="form-group">
                <label className="form-label">Upload Resume (PDF):</label>
                <div className="file-upload-box">
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => setFile(e.target.files[0] || null)}
                    className="file-input"
                  />
                </div>
              </div>

              {/* زر الإرسال والتقييم */}
              <button type="submit" disabled={status === 'loading'} className="submit-btn">
                {status === 'loading' ? 'Evaluating...' : 'Evaluate'}
              </button>
            </form>
          </div>

          {/* العمود الثاني: الـ RESULTS (الجهة اليمنى في المخطط الشاشي) */}
          <div className="evaluator-results-column">
            <h3 className="results-title">RESULTS</h3>
            
            <div className="results-content-area">
              {status === 'idle' && (
                <p className="status-idle">Results will appear here after you submit.</p>
              )}
              
              {status === 'loading' && (
                <p className="status-loading">🔄 Checking and comparing the resume, please wait...</p>
              )}
              
              {status === 'error' && (
                <p className="status-error">{errorMessage}</p>
              )}
              
              {status === 'success' && (
                <div className="status-success">{result}</div>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default EvaluatorPage;