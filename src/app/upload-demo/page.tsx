'use client';

import { useState } from 'react';
import styles from './demo.module.css';

export default function UploadDemo() {
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [uploadedUrl, setUploadedUrl] = useState<string>('');
    const [error, setError] = useState('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
            setError('');
        }
    };

    const handleUpload = async () => {
        if (!file) {
            setError('Please select a file first');
            return;
        }

        setUploading(true);
        setError('');

        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Upload failed');
            }

            setUploadedUrl(data.url);
            setFile(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Upload failed');
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>
                    Image <span className={styles.highlight}>Upload Demo</span>
                </h1>
                <p className={styles.subtitle}>
                    Upload images to Vercel Blob Storage
                </p>

                <div className={styles.uploadSection}>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className={styles.fileInput}
                        id="file-input"
                    />
                    <label htmlFor="file-input" className={styles.fileLabel}>
                        {file ? file.name : 'Choose an image...'}
                    </label>

                    <button
                        onClick={handleUpload}
                        disabled={!file || uploading}
                        className={styles.uploadBtn}
                    >
                        {uploading ? 'Uploading...' : 'Upload Image'}
                    </button>
                </div>

                {error && (
                    <div className={styles.error}>
                        {error}
                    </div>
                )}

                {uploadedUrl && (
                    <div className={styles.result}>
                        <h3>Upload Successful!</h3>
                        <img
                            src={uploadedUrl}
                            alt="Uploaded"
                            className={styles.uploadedImage}
                        />
                        <a
                            href={uploadedUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            View Full Image
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
