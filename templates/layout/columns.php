<div class="wcpf-layout-item wcpf-layout-columns wcpf-front-element-<?php echo $entity_id; ?>">
    <div class="wcpf-layout-columns-inner  wcpf-layout-columns-<?php echo $entity_id; ?>-inner">
        <?php
            foreach ( $columns as $column_index => $column ):

                $width = isset( $column['options']['width'] ) ? $column['options']['width'] : false;
        ?>
        <div class="wcpf-layout-column wcpf-layout-column-<?php echo $entity_id; ?> wcpf-layout-column-<?php echo $column_index; ?> wcpf-layout-<?php echo $entity_id; ?>-column-<?php echo $column_index; ?>"
            <?php if ( $width ): ?>style="width: <?php echo esc_attr( $width ); ?>;" <?php endif; ?>>
            <div class="wcpf-layout-column-inner">
                <?php
                    foreach ( $column['components'] as $child_component ) {
                        $child_component->template_render();
                    }
                ?>
            </div>
        </div>
        <?php endforeach; ?>
    </div>
</div>