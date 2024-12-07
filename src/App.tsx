import "./App.css";
import { UnicornEmbed } from "./components/UnicornEmbed";
import { useUnicornStudio } from "./hooks/useUnicornStudio";

function App() {
  useUnicornStudio();
  return (
    <div style={{ display: "contents" }}>
      <UnicornEmbed projectId="rcbKQxvX4LAGXNSmtrzJ" />
      <UnicornEmbed projectId="lI3jGBYkqcaIxmHGfj0u" />
      <p>ダミーテキスト</p>
      <p>ダミーテキスト</p>
      <p>ダミーテキスト</p>
      <p>ダミーテキスト</p>
      <p>ダミーテキスト</p>
      <p>ダミーテキスト</p>
      <p>ダミーテキスト</p>
      <p>ダミーテキスト</p>
      <p>ダミーテキスト</p>
      <p>ダミーテキスト</p>
      <p>ダミーテキスト</p>
      <p>ダミーテキスト</p>
      <p>ダミーテキスト</p>
      <p>ダミーテキスト</p>
      <p>ダミーテキスト</p>
    </div>
  );
}

export default App;
