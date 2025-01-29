'use client'
import React from 'react'
import { useDropzone } from 'react-dropzone'
import { Inbox } from 'lucide-react'

const FileUpload = () => {
    const { getRootProps, getInputProps } = useDropzone()
    return (
        <div className="p-2 bg-white rounded-xl">
            <div
                {...getRootProps({
                    className: "border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-content items-center flex-col",
                })}
            >
                <input {...getRootProps} />
                <Inbox className="w-10">
                    
                </Inbox>
            </div>
        </div>
    );
};

export default FileUpload