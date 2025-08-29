import Button from '@/components/ui/button/Button'
import { Inputfield, Textareafield } from '@/components/ui/input/Inputfield';
import InputImage from '@/components/ui/input/InputImage';
import InputZipcode from '@/components/ui/input/InputZipcode';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{width: "1000px"}}>
      기본 첫 페이지 입니당
      <Link href='/boards/new'>
      <Button type="button" variant="FormBtn">
        게시글 등록하기
      </Button>
      </Link>

      <br/>

      <Link href="/boards/detail">
      <Button type="button" variant="FormBtn">
        게시글 등록하기
      </Button>
      </Link>

      <InputZipcode variant='Formfield' placeholder="주소를 입력해주세요" placeholder_2='상세 주소'></InputZipcode>
      <InputImage></InputImage>
    </div>
  );
}
