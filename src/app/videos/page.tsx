/* eslint-disable react-dom/no-missing-iframe-sandbox */

const VideoSection = ({ title, videoId, description }: { title: string; videoId: string; description?: string }) => (
  <section>
    <h2 className="mb-4 text-base font-bold">{title}</h2>
    <div className="relative mb-4 aspect-[16/9] bg-gray-200">
      <iframe
        className="size-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={`${title} Video`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
    {description && <p className="text-base">{description}</p>}
  </section>
);

export default async function Videos() {
  return (
    <div className="mx-auto max-w-screen-xl px-4">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <VideoSection
          title="Walking Policy Tested on Real Hardware"
          videoId="9qvbCUorK34"
          description="This demo shows our end-to-end pipeline in action: human operators in MoCap suits collect diverse locomotion trajectories, which we retarget to the robot’s kinematic model. We then train a sim-to-real walking policy on that dataset and deploy it directly to hardware—achieving dynamic, stable humanoid gait."
        />

        <VideoSection
          title="Simulation Pipeline: Training Policies from Our Dataset"
          videoId="D3dI63GXNTk"
          description="In our high-fidelity simulator, we initialize the humanoid with retargeted motion and teleop trajectories from our dataset, then train and validate robust control policies before real-world deployment. This pipeline helps humanoid companies validate their dataset fast in simulation."
        />

        <VideoSection
          title="Our MoCap Setup"
          videoId="vIc5sNNMnd4"
          description="Our MoCap studio captures precise full-body human motions using high-fidelity sensors. We then automatically retarget those recordings to the robot’s kinematic model, creating realistic training data for robust policy development."
        />

        <VideoSection
          title="Fine manipulation tasks"
          videoId="5iIs3b9yFvs"
          description="This demo highlights dexterous manipulation learned from our teleoperation dataset. Operators use VR headsets and haptic sensor gloves to capture precise finger trajectories, force profiles, and tactile feedback, which we use to train and validate fine manipulation models."
        />

        {/* <VideoSection
          title="Two-Way Communication"
          videoId="t1kuW52HNGk"
          description="Interactive audio system enables direct communication between operators and on-site personnel for rapid response."
        />

        <VideoSection
          title="Autonomous Patrol & Response"
          videoId="_ZbnTWCrEPc"
          description="Experience autonomous 24/7 surveillance with advanced route optimization and instant alert capabilities, ensuring continuous coverage of your facility."
        /> */}
      </div>
    </div>
  );
}
