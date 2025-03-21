import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function AwsServices() {
  const awsExample = `# List all S3 buckets
aws s3 ls

# Start an EC2 instance
aws ec2 start-instances --instance-ids i-1234567890abcdef0

# Deploy a CloudFormation stack
aws cloudformation deploy --template-file template.yaml --stack-name my-stack`;

  return (
    <div className={`homepage-container`}>
      <div className="flex-norm-col w-96">
        <p className="homepage-title">AWS</p>
        <p className="homepage-description">A comprehensive cloud computing platform</p>
        <button className={`bg-orange-600 text-slate-50 hover:bg-orange-700
          homepage-button`}>Learn AWS</button>
        <button className={`bg-white text-gray-900 hover:bg-gray-200
          homepage-button`}>AWS Reference</button>
        <button className={`bg-yellow-200 text-gray-900 hover:bg-yellow-300
          homepage-button`}>Get Certified</button>
      </div>
      <div className="homepage-code-container">
        <p className="text-gray-800 font-bold max-xs-2.1:text-sm">AWS Example</p>
          {/* @ts-ignore */}
          <SyntaxHighlighter language="bash" style={oneDark} className="rounded-lg">
            {awsExample}
          </SyntaxHighlighter>
        <button className="homepage-code-button">Try it Yourself</button>
      </div>
    </div>
  );
}