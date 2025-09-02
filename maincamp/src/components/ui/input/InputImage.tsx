import styles from './InputImage.module.css'
import { ChangeEvent } from "react"

export default function InputImage (props:{onChange?: (event: ChangeEvent<HTMLInputElement>) => void;}){
    return(
      <div className={styles.add__image}>
        <label htmlFor="upload__image">
            <input id="upload__image" type="file" style={{display:"none"}} onChange={props.onChange}/>
            <img src="/icons/add.svg" />
            클릭해서 사진 업로드
        </label>
      </div>
    )
  }