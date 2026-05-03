import PageFirstView from "@/components/layout/PageFirstView";
import TwoColumn from "@/components/layout/TwoColumn";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Radio from "@/components/ui/Radio";

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
        <Input
          id="company"
          type="text"
          name="company"
          defaultValue=""
          placeholder="例：株式会社xxx"
          required={true}
          pattern="xxx"
        ></Input>
        <p>お問い合わせ用のページです</p>
        <Textarea
          id="message"
          name="message"
          defaultValue=""
          placeholder="お伝え事項がございましたらご自由にご記入ください。"
          required={true}
        ></Textarea>
        <p>お問い合わせ用のページです</p>
        <Radio
          name="color"
          items={[
            { value: "青", text: "青" },
            { value: "赤", text: "赤" },
            { value: "黄", text: "黄" },
          ]}
        ></Radio>
      </TwoColumn>
    </>
  );
}
