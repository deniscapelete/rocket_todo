import Badge from "../components/badge";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import Container from "../components/container";
import Icon from "../components/icon";
import InputCheckbox from "../components/input-checkbox";
import InputText from "../components/input-text";
import Skeleton from "../components/skeleton";
import Text from "../components/text";
import TrashIcon from "../assets/icons/trash.svg?react"
import CheckIcon from "../assets/icons/check.svg?react"
import PlusIcon from "../assets/icons/plus.svg?react"
import SpinnerIcon from "../assets/icons/spinner.svg?react"
import PencilIcon from "../assets/icons/pencil.svg?react"
import XIcon from "../assets/icons/x.svg?react"

export default function PageComponents() {
  return (
    <Container>

      <div className="grid gap-6">
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

        <div className="flex gap-1">
          <Icon svg={TrashIcon} className="fill-green-base" />
          <Icon svg={CheckIcon} />
          <Icon svg={PencilIcon} />
          <Icon svg={PlusIcon} />
          <Icon svg={SpinnerIcon} animate />
          <Icon svg={XIcon} />
        </div>

        <div className="flex gap-1">
          <Badge variant={"secondary"}>5</Badge>
          <Badge variant={"primary"}>2 de 5</Badge>
          <Badge loading>5</Badge>

        </div>

        <div>
          <Button icon={PlusIcon} >Nova Tarefa</Button>
          <Button icon={PlusIcon} handling >Carregando...</Button>
        </div>

        <div className="flex gap-1">
          <ButtonIcon icon={TrashIcon} />
          <ButtonIcon icon={TrashIcon} variant={'secondary'} />
          <ButtonIcon icon={TrashIcon} variant={'tertiary'} />
          <ButtonIcon loading icon={TrashIcon} />
          <ButtonIcon icon={TrashIcon} handling />
        </div>

        <div>
          <InputText />
        </div>

        <div>
          <InputCheckbox />
        </div>
        <div>
          <InputCheckbox loading />
        </div>

        <div>
          <Card size={'md'}>Olá mundo!</Card>
        </div>

        <div className="space-y-2">
          <Skeleton className="h-8" />
          <Skeleton className="h-8" />
          <Skeleton className="w-96 h-8" />
        </div>
      </div>
    </Container>
  )
}