export async function generateMetadata() {
  return {
    title: 'datamimic',
    description: 'Humanoid data done for you',
  };
}

export default async function Index() {
  return (
    <div className="mx-auto max-w-screen-md text-base">
      <p className="mb-8">
        DataMimic provides turnkey data solutions for humanoid robotics, relieving
        robot companies and research labs of the time-consuming burden of data
        collection so your team can focus on AI innovation.
      </p>
      <br />

      <div className="mb-8 bg-gray-50 p-6">
        <h2 className="mb-4 text-xl font-bold">We Offer:</h2>
        <ul className="list-disc pl-5">
          <li>Large-scale MoCap capture studios staffed with trained operators</li>
          <li>Automated retargeting of human MoCap data onto custom robot kinematics</li>
          <li>
            Teleoperation rigs (VR headsets &amp; gloves) for high-fidelity dexterous
            manipulation data
          </li>
          <li>
            Vision-Language-Action (VLA) aligned datasets with synchronized video,
            text, and control trajectories
          </li>
          <li>Domain-randomized simulation pipelines for sim-to-real validation</li>
        </ul>
      </div>

      <h2 className="mb-4 text-xl font-bold">Technology Overview</h2>
      <p className="mb-8">
        To build general-purpose humanoid robots, we need large-scale, diverse
        robotics motion data. LLMs succeeded by training on internet-scale text;
        robot policies likewise need massive human demonstrations. Our mission at
        DataMimic is to address this industry pain point by capturing, processing,
        and delivering the data you need.
      </p>

      <p className="mb-8">
        Two approaches have recently driven breakthroughs in humanoid robotics.
        First, agile whole-body skills—like parkour (
        <a
          href="https://youtu.be/I44_zbEwz_w?si=SllsQbc0aH6IYJ58"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          watch the demo
        </a>
        )—are enabled by retargeting large MoCap datasets into simulation and
        training with reinforcement learning. To move beyond simply replaying
        predefined trajectories, we need vast, diverse motion datasets.
      </p>
      <p className="mb-8">
        Second, fine-grained manipulation relies on AR/VR teleoperation with human
        demonstration. Operators wearing VR headsets and haptic gloves capture
        detailed finger trajectories, force profiles, and touch events (
        <a
          href="https://youtu.be/Z3yQHYNXPws?si=PNMoBdLCsBG5oRif"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          watch the demo
        </a>
        ). These controllers also require large-scale teleop datasets to generalize to
        new tasks, creating the need for massive human demonstration data at low cost.
      </p>

      <h2 className="mb-4 text-xl font-bold">The Team</h2>
      <p className="mb-8">
        Our founding team comes from Georgia Tech and KAIST, with work experience at
        Figure AI, Toyota Research Institute, and Raion Robotics.
      </p>
      <ul className="list-disc pl-5 mb-8">
        <li>
          <a
            href="https://sanjar-techie.github.io/"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sanjar Atamuradov
          </a>
        </li>
        <li>
          <a
            href="https://guzhaoyuan.com/"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zhaoyuan Gu
          </a>
        </li>
      </ul>
    </div>
  );
}
