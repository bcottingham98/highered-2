import { useRouter } from 'next/router';
import type { FormEvent } from 'react';
import { useState } from 'react';

export interface IBaseWaitlistCandidateForm {
  sampleTextProp: string;
}

const BaseWaitlistCandidateForm: React.FC<IBaseWaitlistCandidateForm> = () => {
  const router = useRouter();
  const contentType = 'application/json';
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // ---

  const postData = async (data: any) => {
    console.log(data);

    try {
      const res = await fetch('/api/candidate/candidate-waitlist', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(data),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.statusText);
      }

      router.push('/');
    } catch (error) {
      setMessage('Failed to add to company survey list');
    }
  };

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    postData(email);
    console.log(message);
  }

  return (
    <div className="flex h-full w-full items-center justify-center">
      {/* <Transition appear show={animation} as={Fragment}> */}
      <form
        onSubmit={onSubmit}
        className="flex w-full flex-col items-center justify-center sm:flex-row"
      >
        <input
          type="text"
          id="waitlist"
          name="waitlist"
          value={email}
          className="h-12 w-72 rounded indent-4"
          placeholder="john.doe@mail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="ml-4 box-border h-12 rounded bg-gradient-to-r from-green-600 to-green-400 px-4 py-2 text-white shadow-md hover:from-green-400 hover:to-green-600 hover:shadow-lg"
        >
          Join
        </button>
      </form>
      {/* </Transition> */}
    </div>
  );
};

export default BaseWaitlistCandidateForm;
