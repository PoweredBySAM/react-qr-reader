import * as React from 'react';

declare namespace QrReader {
    interface props {
        onScan: (data: string | null) => void;
        onError: (err: any) => void;
        onLoad?: () => void;
        onImageLoad?: (event: React.SyntheticEvent<HTMLImageElement>) => void;
        delay?: number | false;
        facingMode?: 'user' | 'environment';
        legacyMode?: boolean;
        resolution?: number;
        showViewFinder?: boolean;
        style?: any;
        className?: string;
    }
}

export as namespace QrReader;

declare class QrReader extends React.Component<QrReader.props> {
    openImageDialog: () => void;
}

export = QrReader;