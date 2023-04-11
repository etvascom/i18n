import React from 'react'
import { T } from '../../../src'
import { Code } from '../components'

export const TDemo = () => (
  <>
    <h2>The T component</h2>
    <p>Use this component to display translated strings</p>
    <p>
      The label <code>hello</code> doesn't have DE translations. It will
      fallback to <em>en</em>. <br />
    </p>
    <p>
      Hello translated:
      <strong>
        <T label='hello' />
      </strong>
    </p>
    <Code>{`<T label='hello' />`}</Code>
    <p>
      With named arguments:
      <T label='hello-name' args={{ name: 'John' }} />
    </p>
    <Code>{`<T label='hello-name' args={{ name: 'John' }} />`}</Code>
    <p>
      With positional arguments:
      <T label='hello-multiple' args={['John', 'Mark']} />
    </p>
    <Code>{`<T label='hello-multiple' args={['John', 'Mark']} />`}</Code>
    <p>
      <button>
        <T label='save' />
      </button>
    </p>
    <h3>Render function</h3>
    Sometimes you need the translation as a string to pass it to props like{' '}
    <code>img.alt</code>
    or other situations where a <code>ReactNode</code> just won't do.
    <T>
      {({ translate }) => (
        <>
          <p>
            As a title for an anchor:{' '}
            <a
              href='google.com'
              target='_blank'
              title={translate('hello-world')}>
              Hover me
            </a>
          </p>
          <p>
            As alt text for an image:
            <img src='unknown' alt={translate('hello-world')} />
          </p>
        </>
      )}
    </T>
    <Code>{`<T>{({ translate }) => (
  <>
    <p>
      As a title for an anchor:{' '}
      <a
        href='google.com'
        target='_blank'
        title={translate('hello-world')}>
        Hover me
      </a>
    </p>
    <p>
      As alt text for an image:
      <img src='unknown' alt={translate('hello-world')} />
    </p>
  </>
)}</T>`}</Code>
    <h3>Display current language</h3>
    <p>
      You can also use <code>T</code> to display current language
    </p>
    <T>{({ language }) => <p>Current language across app: {language}</p>}</T>
    <Code>{`
<T>{({ language }) => (
  <p>Current language across app: {language}</p>
)}</T>
  `}</Code>
    <MarkedLabel />
  </>
)

const MarkedLabel = () => (
  <>
    <h3>Display by mark</h3>
    <p>
      You can use the <code>mark</code> prop if you want to render a translation
      based on different cases (negative/none/one/many)
    </p>
    <p>
      Negative
      <strong>
        <T label='testLabel' args={{ value: -1 }} mark='value' />
      </strong>
    </p>
    <Code>{` <T label='testLabel' args={{ value: -1 }} mark='value' />`}</Code>
    <p>
      Zero:
      <strong>
        <T label='testLabel' args={{ value: 0 }} mark='value' />
      </strong>
    </p>
    <Code>{` <T label='testLabel' args={{ value: 0 }} mark='value' />`}</Code>
    <p>
      One:
      <strong>
        <T label='testLabel' args={{ value: 1 }} mark='value' />
      </strong>
    </p>
    <Code>{`<T label='testLabel' args={{ value: 1 }} mark='value' />`}</Code>
    <p>
      Many:
      <strong>
        <T label='testLabel' args={{ value: 2 }} mark='value' />
      </strong>
    </p>
    <Code>{`<T label='testLabel' args={{ value: 2 }} mark='value' />`}</Code>
    <p>You can provide the index as a mark if the args props is an array</p>
    <strong>
      <T label='foo' args={[5]} mark={0} />
    </strong>
    <Code>{`<T label='foo' args={[5]} mark={0} />`}</Code>
    <p>
      If the label with the appropriate suffix is not found, the default label
      is the declared one as a prop.
    </p>
    <p>
      Language-specific translations:
      <strong>
        <T label='foo.only.de' args={{ value: 2 }} mark='value' />
      </strong>
    </p>
  </>
)
