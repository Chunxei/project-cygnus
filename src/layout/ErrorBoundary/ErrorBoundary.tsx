import React,
{
  Component,
  // ErrorInfo
} from 'react';

type Props = {
  children: React.ReactNode
};

type State = {
  hasError: boolean
};

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('Error:', { error, errorInfo });
  }

  render(): React.ReactNode {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      // TODO: update the ErrorBoundary view
      return (
        <div className="ErrorBoundary">
          <h1>Something went wrong</h1>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
