import PageFirstView from "@/components/layout/PageFirstView";
import TwoColumn from "@/components/layout/TwoColumn";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Radio from "@/components/ui/Radio";
import Checkbox from "@/components/ui/Checkbox";
import Submit from "@/components/ui/Submit";
import Label from "@/components/ui/Label";

export default function Contact() {
  return (
    <>
      <PageFirstView
        subText="Contact"
        mainText="お問い合わせ"
        textAlign="isCenter"
      />
      <TwoColumn>
        <p>お問い合わせ用のページです</p>
        <Label text="会社・組織名" isRequired={true} id="company" />
        <Input
          id="company"
          type="text"
          name="company"
          defaultValue=""
          placeholder="例：株式会社xxx"
          required={true}
          pattern="xxx"
        />
        <p>お問い合わせ用のページです</p>
        <Textarea
          id="message"
          name="message"
          defaultValue=""
          placeholder="お伝え事項がございましたらご自由にご記入ください。"
          required={true}
        />
        <p>お問い合わせ用のページです</p>
        <Radio
          name="color"
          items={[
            { value: "青", text: "青" },
            { value: "赤", text: "赤", cheked: true },
            { value: "黄", text: "黄" },
          ]}
          required={true}
        />
        <p>お問い合わせ用のページです</p>
        <Checkbox
          name="color2"
          items={[
            { value: "青", text: "青" },
            { value: "赤", text: "赤", cheked: true },
            { value: "黄", text: "黄" },
          ]}
          required={true}
        />
        <p>お問い合わせ用のページです</p>
        <Submit text="送信する" />
      </TwoColumn>
    </>
  );
}
