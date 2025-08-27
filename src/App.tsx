import Text from "./components/text";

export default function App() {

  return (
    <div className="flex flex-col gap-2">
      <Text variant={"body-sm-bold"} className="text-pink-base">
        Olá mundo!
      </Text>
      <Text className="text-green-dark">
        Olá mundo!
      </Text>
      <Text variant={"body-sm-bold"} >
        Olá mundo!
      </Text>
    </div>
  )
}