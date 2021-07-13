import React from 'react';

type ErrorState = { hasError: boolean };

export class ErrorBoundary extends React.Component<
    { children: JSX.Element },
    ErrorState
> {
    state: ErrorState = {
        hasError: false,
    };

    static getDerivedStateFromError(_error: Error): ErrorState {
        return { hasError: true };
    }

    render(): JSX.Element {
        if (this.state.hasError) {
            return <h1>Something went wrong. :(</h1>;
        }

        return this.props.children;
    }
}
