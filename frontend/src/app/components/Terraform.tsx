import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function Terraform() {
  const terraformExample = `# Initialize a Terraform configuration
terraform init

# Plan the changes required to reach the desired state
terraform plan

# Apply the changes required to reach the desired state
terraform apply`;

  return (
    <div className={`homepage-container`}>
      <div className="flex-norm-col w-96">
        <p className="homepage-title">Terraform</p>
        <p className="homepage-description">An open-source infrastructure as code software tool</p>
        <button className={`bg-purple-600 text-slate-50 hover:bg-purple-700
          homepage-button`}>Learn Terraform</button>
        <button className={`bg-white text-gray-900 hover:bg-gray-200
          homepage-button`}>Terraform Reference</button>
        <button className={`bg-orange-200 text-gray-900 hover:bg-orange-300
          homepage-button`}>Get Certified</button>
      </div>
      <div className="homepage-code-container">
        <p className="text-gray-800 font-bold max-xs-2.1:text-sm">Terraform Example</p>
          {/* @ts-ignore */}
          <SyntaxHighlighter language="bash" style={oneDark} className="rounded-lg">
            {terraformExample}
          </SyntaxHighlighter>
        <button className="homepage-code-button">Try it Yourself</button>
      </div>
    </div>
  );
}