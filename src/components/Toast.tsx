
type VerticalPropType = 'Top' | 'Bottom' | 'Center'

type HorizontalPropType = 'Right' | 'Center' | 'Left'


type PositionPropType = {
    // using template litterals and exclude
    position: Exclude<`${VerticalPropType}-${HorizontalPropType}`, 'Center-Center'>|'Center'
}
function Toast({ position }: PositionPropType) {
    return (
        <div>
            Toast Notification :{position}
        </div>
    );
}

export default Toast;