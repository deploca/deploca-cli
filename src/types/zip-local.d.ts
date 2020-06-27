declare module 'zip-local' {
    export function unzip(file: string, callback: (error: Error, unzipped: IZipExport) => void): void;
    export function zip(entity: string, callback: (error: Error, zipped: IZipExport) => void, shiftedCallback?: any): void;
    export namespace sync {
        function unzip(file: string): IZipExport;
        function zip(entity: string, buffer_name?: any): IZipExport;
    }
}

interface IZipExport {
    compress() : IZipExport;
    memory() : Buffer;
    save(filename:string, callback?:(error:Error) => void) : void;
}
