import { Skeleton } from "@mantine/core";

function CardServicesSkeleton() {
	return (
		<>
			<div className="rounded-full w-full h-52 md:h-80 flex flex-col cursor-pointer">
				<div className="relative w-full h-36 md:h-64">
					<Skeleton className="w-full h-full" radius="lg" />
				</div>
				<Skeleton height={8} mt={6} width="100%" radius="xl" />
			</div>
		</>
	);
}

export default CardServicesSkeleton;
