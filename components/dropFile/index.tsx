"use client"
import React from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';

export default function DropFile({ image, ...props }: DropzoneOptions & { image: string }) {
  const {
    getRootProps,
    getInputProps,
    acceptedFiles,

  } = useDropzone({
    ...props,
    accept: {
      'image/*': ['.jpeg', '.png']
    }
  });

  return (
    <div
      {...getRootProps()}
      className='flex items-center justify-center w-full h-[280px] border-2 border-dashed rounded-md mb-8 focus:border-slate-800'
    >
      <input
        {...getInputProps()}
        placeholder='upload image'
        name='image'
      />
      {acceptedFiles?.length > 0
        ? acceptedFiles.map((file: any) => (
          <figure key={file.path} className='text-sm text-gray-800 w-full h-[270px]'>
            <img
              src={image}
              alt="post-image"
              className="w-full h-full object-cover rounded-xl"
            />
          </figure>
        ))
        : <p
          className='text-center text-sm text-[#9ca3af]'
        >
          Drag and drop some files here, or click to select files
        </p>
      }
    </div>
  );
}