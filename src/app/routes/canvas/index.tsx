import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/canvas/")({
	component: CanvasPage,
});

export function CanvasPage() {
	return <div>hoge</div>;
}
