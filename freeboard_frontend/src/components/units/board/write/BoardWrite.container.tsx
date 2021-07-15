import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import { IQuery } from '../../../../commons/types/generated/types';
import BoardWriteUI from './BoardWrite.presenter';
import {CREATE_BOARD, UPDATE_BOARD} from './BoardWrite.queries'
import { IBoardWriteProps } from './BoardWrite.types';

export const INPUTS_INIT = {
  writer: '',
  password: '',
  title: '',
  contents: ''
}

interface INewInputs {
  title?: string
  contents?: string
}

interface IProps {
  isEdit?: boolean
  data?: IQuery
}

export default function BoardWrite(props: IProps){
    const router = useRouter()
    const [active, setActive] = useState(false)
    const [inputs, setInputs] = useState(INPUTS_INIT)
    const [inputsErrors, setInputsErrors] = useState(INPUTS_INIT)
  
    const [createBoard] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)
    
    function onChangeInputs(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
      const newInputs = { ...inputs, [event.target.name]: event.target.value }
      setInputs(newInputs)
      setActive(Object.values(newInputs).every(data => data))
      setInputsErrors({ ...inputsErrors, [event.target.name]: "" })
    }

    async function onClickSubmit(){
      setInputsErrors({
        writer: inputs.writer ? "" : "작성자를 입력해주세요.",
        password: inputs.password ? "" : "비밀번호를 입력해주세요.",
        title: inputs.title ? "" : "제목을 입력해주세요.",
        contents: inputs.contents ? "" : "내용을 입력해주세요."
      })
      if(Object.values(inputs).every(data => data)){
        try {
          const result = await createBoard({
            variables: { createBoardInput: { ...inputs }}
          })
          alert('게시물이 성공적으로 등록되었습니다.')
          router.push(`/boards/${result.data.createBoard._id}`)
        } catch(error){
          alert(error.message)
        }
      }
    }

    async function onClickUpdate(){
      const newInputs: INewInputs = {}
        if(inputs.title) newInputs.title = inputs.title
        if(inputs.contents) newInputs.contents = inputs.contents
        try {
            const result = await updateBoard({
                variables: {
                    boardId: String(router.query.boardId),
                    password: inputs.password,
                    updateBoardInput: { ...newInputs }
                }
            })
            alert(result.data?.updateBoard._id)
            router.push(`/detail/${result.data?.updateBoard._id}`)
        } catch(error) {
            alert(error.message)
        }
    }

    // async function onClickUpdate(){
    //   setInputsErrors({
    //     writer: inputs.writer ? "" : "작성자를 입력해주세요.",
    //     password: inputs.password ? "" : "비밀번호를 입력해주세요.",
    //     title: inputs.title ? "" : "제목을 입력해주세요.",
    //     contents: inputs.contents ? "" : "내용을 입력해주세요."
    //   })
    //   if(Object.values(inputs).every(data => data)){
    //     try {
    //       const result = await updateBoard({
    //         variables: { 
    //           boardId: router.query.boardId,
    //           password: inputs.password,
    //           updateBoardInput: { 
    //             title: inputs.title,
    //             contents: inputs.contents
    //           }
    //         }
    //       })
    //       alert('게시물이 성공적으로 수정되었습니다.')
    //       router.push(`/boards/${result.data.updateBoard._id}`)
    //     } catch(error){
    //       alert(error.message)
    //     }
    //   }
    // }

    return(
        <BoardWriteUI 
          isEdit={props.isEdit}
          active={active}
          inputsErrors={inputsErrors}
          onChangeInputs={onChangeInputs}
          onClickSubmit={onClickSubmit}
          onClickUpdate={onClickUpdate}
          data = {props.data}
        />
    )
}