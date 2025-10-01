import { Button } from ".";

const meta = {
  title: "components/button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

export const FormButton = {
  args: {
    variant: "FormBtn",
    children: "FormBtn",
  },
  render: () => {
    return (
      <>
        <Button variant="FormBtn" type="submit">
          submit
        </Button>
        <br />
        <Button variant="FormBtn" type="submit" disabled>
          submit(disabled)
        </Button>
        <br />
        <Button variant="FormBtn" type="button">
          button
        </Button>
      </>
    );
  },
};

export const CommentButton = {
  args: {
    variant: "CommentBtn",
    children: "CommentBtn",
  },
  render: () => {
    return (
      <>
        <Button variant="CommentBtn" type="submit">
          submit
        </Button>
        <br />
        <Button variant="CommentBtn" type="submit" disabled>
          submit(disabled)
        </Button>
        <br />
        <Button variant="CommentBtn" type="button">
          button
        </Button>
      </>
    );
  },
};

export const ModalButton = {
  args: {
    variant: "ModalBtn",
    children: "ModalBtn",
  },
  render: () => {
    return (
      <>
        <Button variant="modalBtn" type="submit">
          submit
        </Button>
        <br />
        <Button variant="modalBtn" type="button">
          button
        </Button>
      </>
    );
  },
};
