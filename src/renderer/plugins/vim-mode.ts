import { Plugin } from '@fe/context'
import { initVimMode } from 'monaco-vim'

export default {
  name: 'vim-mode',
  register: ctx => {
    ctx.editor.whenEditorReady().then((monaco) => {
      initVimMode(monaco.editor)
    })
  }
} as Plugin
