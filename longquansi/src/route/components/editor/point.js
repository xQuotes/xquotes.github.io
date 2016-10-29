import {
  CompositeDecorator
} from 'draft-js'

export const compositeDecorator = new CompositeDecorator([
  {
    strategy: handleStrategy,
    component: CharactorSpan
  }
])


//匹配这些中文标点符号 。 ？ ！ ， 、 ； ： “ ” ‘ ' （ ） 《 》 【 】 『 』 「 」 ﹃ ﹄ 〔 〕 … — ～ ﹏ ￥
const CN_CHARACTOR_REGEX = /[\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/g;
// 〈 〉
const ANGLE_BRACKET_REGEX = /\u3008+(.*?)+\u3009/g;

const ANGLE_BRACKET_REGEX2 = /[\u3008|\u3009]/g;
const VERTIALLINE_REGEX = /[\uff5c]/g;

// text.replace(reg, function(a,b){console.log(b); return `<span class="cn-charactor">${text[b]}</span>`})

export function handleStrategy(contentBlock, callback) {
  findWithRegex(CN_CHARACTOR_REGEX, contentBlock, callback);
}

export function handlAngleBracket(contentBlock, callback) {
  findWithRegex(ANGLE_BRACKET_REGEX, contentBlock, callback);
}

export function handlVertialLine(contentBlock, callback) {
  findWithRegex(VERTIALLINE_REGEX, contentBlock, callback);
}

function findWithRegex(regex, contentBlock, callback) {
  const text = contentBlock.getText();
  let matchArr, start;
  while ((matchArr = regex.exec(text)) !== null ) {
    start = matchArr.index;
    callback(start, start + matchArr[0].length);
  }
}

export const CharactorSpan = (props) => {
  return <span className="charactor-span" style={{
    display: 'none',
    backgroundColor: '#ddd'
  }}>{props.children}</span>;
}

export const AngleBrachetSpan = (props) => {
  console.log(props)
  let text = props.decoratedText.replace(ANGLE_BRACKET_REGEX2, '')
  let texts = text.split(VERTIALLINE_REGEX)
  // console.log(texts.join('<br className="vertial-line"/>'))
  // {props.decoratedText.replace(ANGLE_BRACKET_REGEX2, '')}
  return <span className="angle-bracket" style={{
    display: 'inline-block'
  }} dangerouslySetInnerHTML={{__html: texts.join('<br className="'+`vertial-line vertial-line-${texts.length}` +'"/>')}} >
  
  </span>
}

export const VertialLineSpan = (props) => {
  console.log(props)
  return <br/>;
}

