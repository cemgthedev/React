import { uniqueId } from 'lodash';
import { CircleAlertIcon, CircleCheckIcon, Link2Icon } from 'lucide-react';
import { ReactNode, useCallback, useState } from 'react';
import { Accept, FileWithPath, useDropzone } from 'react-dropzone';
import { twMerge } from 'tailwind-merge';

import { MAX_FILE_SIZE } from '../data';

export type UploadProps = {
  className?: string;
  label?: string;
  labelAcceptFile?: string;
  labelRejectFile?: string;
  linkIcon?: ReactNode;
  typeFilesAccept?: Accept;
};

export type UploadFileProps = {
  data: FileWithPath;
  error: boolean;
};

export function Upload({
  className,
  label = 'Arraste e solte os arquivos aqui ou clique para selecionar',
  labelAcceptFile = 'Solte o arquivo aqui para enviar',
  labelRejectFile = 'Este tipo de arquivo não pode ser aceito',
  linkIcon,
  typeFilesAccept,
}: UploadProps) {
  const [files, setFiles] = useState<UploadFileProps[]>([]);

  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    const newFiles = acceptedFiles.map((file) => ({
      data: file,
      error: file.size > MAX_FILE_SIZE,
    }));

    setFiles((prevState) => [...prevState, ...newFiles]);

    /**
     * acceptedFiles.forEach((file: any) => {
      const reader = new FileReader();

      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;

        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
     */
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragAccept } =
    useDropzone({ onDrop, accept: typeFilesAccept });

  function formatBytes(bytes: number, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['bytes', 'Kb', 'Mb', 'Gb'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  function handleRemoveFile(index: number) {
    setFiles((prevState) =>
      prevState.filter((file) => prevState.indexOf(file) !== index),
    );
  }

  return (
    <div className={twMerge('flex flex-col items-center gap-4', className)}>
      <div
        {...getRootProps()}
        className={twMerge(
          'flex justify-center items-center w-full md:w-96 min-h-20 max-h-20 bg-default-100 border-dashed border-2 p-3 hover:border-primary rounded-md cursor-pointer duration-150',
          !isDragActive
            ? 'border-default-400'
            : isDragAccept
              ? 'border-success'
              : 'border-danger',
        )}
      >
        <input {...getInputProps()} />
        <p className={twMerge('text-center')}>
          {!isDragActive
            ? label
            : isDragAccept
              ? labelAcceptFile
              : labelRejectFile}
        </p>
      </div>
      {files.length > 0 && (
        <div className="w-full md:w-96 flex flex-col gap-2">
          {files.map((file, index) => (
            <div
              key={uniqueId()}
              className="flex gap-2 bg-default-100 px-3 py-2 rounded-md"
            >
              <img
                alt=""
                className="min-w-16 min-h-16 max-w-16 max-h-16 rounded-md object-cover"
                height={48}
                src={URL.createObjectURL(file.data)}
                width={48}
              />
              <div className="flex-1">
                <p className="line-clamp-1 text-md font-semibold">
                  {file.data.name}
                </p>
                <p className="line-clamp-1 text-sm">
                  {formatBytes(file.data.size)}
                </p>
                <button
                  className="text-md font-medium text-danger cursor-pointer hover:opacity-80"
                  onClick={() => handleRemoveFile(index)}
                >
                  Excluir
                </button>
              </div>
              <div className="flex gap-1">
                <a
                  href={URL.createObjectURL(file.data)}
                  rel="noreferrer"
                  target="_blank"
                >
                  {linkIcon ? (
                    linkIcon
                  ) : (
                    <Link2Icon className="w-6 h-6 hover:opacity-80" />
                  )}
                </a>
                {!file.error ? (
                  <span title="Arquivo enviado com sucesso">
                    <CircleCheckIcon
                      className="text-success-600 w-6 h-6 hover:opacity-80"
                      name="Sucesso"
                    />
                  </span>
                ) : (
                  <span title="Erro ao enviar o arquivo">
                    <CircleAlertIcon
                      className="text-danger-600 w-6 h-6 hover:opacity-80"
                      name="Sucesso"
                    />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
