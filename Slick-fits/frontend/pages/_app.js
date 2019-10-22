import App, {Container} from 'next/app';
import Header from '../components/Header';
class MyApp extends App {
  render() {
    const {Component} = this.props;

    return (
      <Container>
        <Header />
        <Component />
      </Container>
    )
  }
}

export default MyApp;