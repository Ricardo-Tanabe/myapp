import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function Ansible() {
  const ansibleExample = `---
- name: Example playbook
  hosts: all
  tasks:
    - name: Ensure a package is installed
      apt:
        name: nginx
        state: present

    - name: Start service
      service:
        name: nginx
        state: started`;

  return (
    <div className={`homepage-container`}>
      <div className="flex-norm-col w-96">
        <p className="homepage-title">Ansible</p>
        <p className="homepage-description">An open-source automation tool for IT tasks</p>
        <button className={`bg-blue-600 text-slate-50 hover:bg-blue-700
          homepage-button`}>Learn Ansible</button>
        <button className={`bg-white text-gray-900 hover:bg-gray-200
          homepage-button`}>Ansible Reference</button>
        <button className={`bg-green-200 text-gray-900 hover:bg-green-300
          homepage-button`}>Get Certified</button>
      </div>
      <div className="homepage-code-container">
        <p className="text-gray-800 font-bold max-xs-2.1:text-sm">Ansible Example</p>
          {/* @ts-ignore */}
          <SyntaxHighlighter language="yaml" style={oneDark} className="rounded-lg">
            {ansibleExample}
          </SyntaxHighlighter>
        <button className="homepage-code-button">Try it Yourself</button>
      </div>
    </div>
  );
}