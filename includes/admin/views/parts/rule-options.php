<select name="<?php echo esc_attr( $name ); ?>">
    <option value=""><?php echo __( 'Not selected', 'wcpf' ); ?></option>

    <?php foreach ( $options as $option_index => $option_data ): ?>

        <?php if ( is_array( $option_data ) ): ?>

            <optgroup label="<?php echo esc_attr( $option_data['label'] ); ?>">

                <?php foreach ( $option_data['options'] as $child_key => $child_title): ?>

                    <option value="<?php echo esc_attr( $child_key ); ?>">
                        <?php echo $child_title; ?>
                    </option>

                <?php endforeach; ?>

            </optgroup>

        <?php else: ?>

            <option value="<?php echo esc_attr( $option_index ); ?>">
                <?php echo $option_data; ?>
            </option>

        <?php endif; ?>

    <?php endforeach; ?>
</select>