import { Component, ErrorInfo, ReactElement } from "react";

interface State {
  hasError: boolean;
}

interface Props {
  children: ReactElement;
}

class ErrorBoundry extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true, isSnackbarOpen: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn(error, errorInfo);
  }

  render() {
    return <>{this.props.children}</>;
  }
}

export default ErrorBoundry;
