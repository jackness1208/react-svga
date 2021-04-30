import React from 'react';
export interface ErrorBoundaryProps {
    onError?: (error: Error) => void;
}
export interface ErrorBoundaryState {
    hasError: boolean;
}
export declare class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    componentDidCatch(error: Error): void;
    render(): {} | null | undefined;
}
