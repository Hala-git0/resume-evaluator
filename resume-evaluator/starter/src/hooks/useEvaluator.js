import { useState } from 'react';

export function useEvaluator() {
  const [jobDescription, setJobDescription] = useState('');
  const [prompt, setPrompt] = useState('');
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('idle'); 
  const [errorMessage, setErrorMessage] = useState(null);
  const [result, setResult] = useState(null);

  
  const handleSubmit = (e) => {
    e.preventDefault(); 

    setErrorMessage(null);
    setResult(null);

    if (!jobDescription.trim()) {
      setStatus('error');
      setErrorMessage('خطأ: يرجى إدخال الوصف الوظيفي (Job Description).');
      return;
    }

    if (!file) {
      setStatus('error');
      setErrorMessage('خطأ: يرجى رفع ملف السيرة الذاتية أولاً.');
      return;
    }

    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
      setResult(`تم تقييم الملف (${file.name}) بنجاح! دمج ChatGPT قادم في المرحلة الخامسة (Stage 5).`);
    }, 1500); 
  };

  return {
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
  };
}